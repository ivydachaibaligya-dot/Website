/**
 * Ivy Embone portfolio chatbot — Google Apps Script receiver.
 *
 * Setup:
 * 1. Create a Google Sheet for website inquiries.
 * 2. Open Extensions > Apps Script.
 * 3. Paste this file into Code.gs.
 * 4. In Project Settings > Script Properties, add:
 *      CHATBOT_WEBHOOK_SECRET = (same long random secret as Vercel)
 *      LEAD_NOTIFICATION_EMAIL = hello@iaurevant.com
 * 5. Deploy > New deployment > Web app.
 *      Execute as: Me
 *      Who has access: Anyone
 * 6. Copy the Web app URL into Vercel as LEAD_WEBHOOK_URL.
 *
 * The script appends each valid inquiry to the active spreadsheet and emails Ivy.
 */

function doPost(e) {
  try {
    var payload = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    var properties = PropertiesService.getScriptProperties();
    var expectedSecret = properties.getProperty("CHATBOT_WEBHOOK_SECRET");
    if (!expectedSecret || payload.secret !== expectedSecret) {
      return jsonOutput({ ok: false, error: "Unauthorized" });
    }

    var name = String(payload.name || "").trim().slice(0, 100);
    var email = String(payload.email || "").trim().slice(0, 254);
    var company = String(payload.company || "").trim().slice(0, 120);
    var need = String(payload.need || "").trim().slice(0, 2000);
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !need) {
      return jsonOutput({ ok: false, error: "Invalid inquiry" });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Submitted At", "Name", "Email", "Company", "What They Need", "Source"]);
    }
    sheet.appendRow([
      new Date(),
      safeCell(name),
      safeCell(email),
      safeCell(company),
      safeCell(need),
      safeCell(String(payload.source || "Website chatbot"))
    ]);

    var notificationEmail = properties.getProperty("LEAD_NOTIFICATION_EMAIL") || "hello@iaurevant.com";
    MailApp.sendEmail({
      to: notificationEmail,
      subject: "New website inquiry from " + name,
      body:
        "A new inquiry was submitted through your portfolio chatbot.\n\n" +
        "Name: " + name + "\nEmail: " + email + "\nCompany: " + company +
        "\n\nWhat they need:\n" + need +
        "\n\nSubmitted: " + (payload.submittedAt || new Date().toISOString())
    });
    return jsonOutput({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonOutput({ ok: false, error: "Unable to save inquiry" });
  }
}

function safeCell(value) {
  var text = String(value || "");
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonOutput(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
