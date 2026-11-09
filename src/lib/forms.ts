export const formsEndpoint = '/__forms.html';

/**
 * Submits a form to Netlify Forms. Each form name and field must also be
 * declared in `public/__forms.html` so Netlify detects it at deploy time.
 */
export async function submitNetlifyForm(formName: string, fields: Record<string, string>): Promise<void> {
  const response = await fetch(formsEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ 'form-name': formName, ...fields }).toString(),
  });
  if (!response.ok) {
    throw new Error(`Form submission failed with status ${response.status}`);
  }
}

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
