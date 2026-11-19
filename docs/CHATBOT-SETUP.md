# Ivy's AI Virtual Receptionist — Setup

The website chatbot uses the Gemini API from a server-side Next.js route. The Gemini key is never sent to the browser.

## 1. Create a Gemini API key

1. Open https://aistudio.google.com/app/apikey.
2. Create an API key in a Google AI Studio project.
3. Keep it private. Do not paste it into GitHub source files or the chat widget.

## 2. Create the leads spreadsheet

1. Create a Google Sheet named **Ivy Website Inquiries**.
2. Open **Extensions → Apps Script**.
3. Copy the complete contents of \`docs/chatbot-google-apps-script.gs\` from this repository into \`Code.gs\`.
4. In Apps Script, open **Project Settings → Script Properties** and add:
   - \`CHATBOT_WEBHOOK_SECRET\`: a long random secret (at least 32 random characters).
   - \`LEAD_NOTIFICATION_EMAIL\`: \`hello@iaurevant.com\`.
5. In Apps Script, choose **Deploy → New deployment → Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Authorize the script when Google asks.
7. Copy the Web app URL ending in \`/exec\`.

The Apps Script writes each inquiry into the active spreadsheet and emails the notification address. Google account quotas and permissions apply.

## 3. Add environment variables in Vercel

In the Vercel project, open **Settings → Environment Variables**. Add these three values for **Production**, **Preview**, and **Development** as appropriate:

| Name | Value |
| --- | --- |
| \`GEMINI_API_KEY\` | Your private Google AI Studio API key |
| \`LEAD_WEBHOOK_URL\` | The Apps Script Web app URL ending in \`/exec\` |
| \`LEAD_WEBHOOK_SECRET\` | The exact same secret as \`CHATBOT_WEBHOOK_SECRET\` in Apps Script |

Do not put any of these secrets in client-side code or commit real values to GitHub.

After saving environment variables, redeploy the latest production deployment so the server routes receive them.

## 4. Test before announcing the chatbot

1. Open the live site in a private/incognito window.
2. Open the **Chat with us** button and ask: "What services does Ivy offer?"
3. Ask: "Can Ivy help a U.S. roofing company?"
4. Submit a test inquiry using an email address you control.
5. Confirm that the test appears in the Google Sheet and that the notification email arrives.
6. Delete the test row when finished.

## Notes

- The chat API currently uses the Gemini model ID \`gemini-2.5-flash\`. If Google changes model availability for your project, update the model ID in \`src/app/api/chat/route.ts\`.
- Gemini free-tier eligibility, quotas, rate limits, and data-use terms depend on the Google project and can change. Check the current terms in Google AI Studio before using it with visitors.
- The widget does not retain chat transcripts. Only the inquiry form is sent to the spreadsheet and notification email.
- Do not ask visitors for passwords, payment information, identity documents, or sensitive personal data.
- If the API or lead integration is not configured, the widget displays a clear fallback message rather than pretending an inquiry was delivered.
