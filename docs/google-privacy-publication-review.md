# Google privacy policy publication review

Prepared October 22, 2026. Local review branch only; not published. Main auto-deploys the public website, so do not merge this branch before the unresolved facts are confirmed and the matching application behavior is deployed.

## Prepared change

The existing full financial/legal notice remains in `content/site/pages.json`. The patch adds Google-data definitions, restrictions that override broader generic clauses, the actual Jev and Gemini processing paths, separate feature/action choices, and distinctions among disconnection, authorization revocation and deletion. It removes blanket consent-by-use wording. No non-privacy page object changes.

## Publication gates

- Confirm legal entity, privacy contact and accuracy of the retained financial-service clauses.
- Approve a concrete retention schedule for active data, logs, backups and saved business records, including restoration cleanup. The draft does not invent a deadline; this general wording is not a substitute for the final schedule.
- Confirm the actual TypeSafe agreement/DPA and Vertex contract/configuration, processing locations, retention, caching and human-access protections. Public provider claims alone do not establish Riff-specific protections.
- Verify the matching deployed consent and cleanup controls, renewed choices for existing users, and every disclosed AI trigger. Local checks are not deployment evidence.
- Review final effective date and material-change communication, then obtain publication approval for the exact rendered page.
- Separately complete Google branding, scope submission, demonstration and any required assessment; policy publication is not Google approval.

## Sources

- [Google Workspace user data and developer policy](https://developers.google.com/workspace/workspace-api-user-data-developer-policy)
- [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy)

Current internal evidence and provider questions are recorded in the Riff Next Google verification package. No Console mutation or public submission is performed by this branch.
