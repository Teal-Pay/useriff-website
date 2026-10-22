# Google privacy policy publication review

Updated October 22, 2026. The user explicitly approved publishing the reviewed Privacy/Terms text while preserving the existing theme and styling. The website main branch auto-publishes through its existing Vercel integration. Publication and serving verification are recorded below when completed.

## Prepared change

The reviewed website source now changes only the Privacy Policy body and one narrow exception in the existing Terms AI paragraph. Financial/payment/legal-rights sections and other pages remain intact. The policy retains the required Google/AI disclosures, consolidates six repeated restrictions into the central Google-data precedence rule, and reflects the source/database/Cloud findings below. The Terms exception prevents its generic AI-improvement permission from overriding the Google restrictions. Publication dates are applied on the actual release; an old Terms date is not evidence that this draft was published.

## Facts resolved from existing systems and standard terms

- Existing public policy already identifies Teal Pay Global, Inc. and info@useriff.app. Those unchanged fields do not require a new generic owner question.
- Both AI providers incorporate data-processing terms into standard contracts. A custom signed DPA or zero-retention arrangement is not an automatic prerequisite for ordinary factual disclosure. No Riff-specific exemption or custom arrangement is asserted.
- Riff uses TypeSafe/Jev and Google Cloud Vertex generation, not consumer Gemini chat. Both Cloud projects currently have durable caching enabled; a zero-retention or regional-only processing promise is unsupported.
- Disconnect clears private mailbox payloads and generated/cache data, but retains limited connection identifiers, consent/delivery metadata and separately saved business/financial records. Gmail-side deletion does not immediately scrub Riff's encrypted copy. No automatic age-based mailbox purge was found;90days is import coverage, not erasure.
- Signed-in Supabase Dashboard shows both projects in the Free organization: no customer-accessible scheduled backups or point-in-time recovery enabled. Separate Dev release dumps exist in GCS with no automatic expiry. A seven-day soft-delete interval is not a seven-day backup lifetime.
- Cloud ordinary log retention is30days in Dev/90days in production; required audit logs400days. The separate production archive has a roughly seven-year minimum, not an automatic deletion date. These values must not be generalized to all data stores.

## Concrete remaining issues

1. **Operational deletion/retention:** no automatic expiry was found for release dumps or active mail by age, and no restore-time deletion replay was found. The draft now states limits instead of inventing a deadline. Supabase internal resilience/disposal and other providers' operational retention are not established by the customer Backups page.
2. **Log minimization:** two sampled Dev App Engine callback entries contain OAuth code/state query parameters; only presence counts were derived, with no raw values saved or emitted. Sentry suppresses Riff request events in source, which does not redact App Engine platform logs. This is a concrete logging-minimization item, not evidence of credential misuse. No logging settings changed.
3. **Publication step:** review the exact local Privacy/Terms amendment and approve publication. Set the actual publication date and maintain the promised material-change/feature-consent process. Google client remediation, branding, real production consent/demo and Google review remain separate; policy publication is an input to that work, not proof of public Gmail approval.

These are specific findings rather than a broad request for credentials or an arbitrary universal retention period. The notice can describe planned features conditionally; do not make policy publication circularly depend on an already-complete public Gmail launch.

## Evidence

Root tmp/riff-audit reports: privacy-database-facts-oct22.md, privacy-provider-terms-facts-oct22.md, privacy-publication-facts-oct22.md and privacy-cloud-facts-oct22.json. Prior historical metadata is in google-retention-facts.md. Standard primary terms and source references are linked in those reports.

## Published TypeSafe statement added to the local draft

At the user’s request, the provider paragraph now attributes the no-training/no-fine-tuning statement to TypeSafe’s published Privacy Policy. This uses their existing public statement without requesting a separate letter. The paragraph does not equate disabled model improvement with no recording or zero retention; the existing accurate operational-retention wording remains. The readable review preview matches the website policy content (its standalone main element omits the site anchor ID). No publication, provider outreach or settings change occurred.

## Google policy cross-check after provider attribution

The reviewed Gmail section and Terms exception have no broad conflict with the preserved financial/privacy clauses. A narrow wording gap was corrected locally: the no-model-use restriction now covers creating, training and improving AI/machine-learning models, rather than only general-purpose training. The matching Terms exception and readable previews were updated. Current Google Workspace policy expressly covers creation and improvement as well as training.

Remaining implementation/evidence checks cover effective deletion handling and proof that production contextual consent matches the notice for existing connections and explicit actions. Accurate retention disclosure does not by itself resolve deletion obligations. No universal zero-retention or numerical-deadline requirement is asserted. These are distinct from publishing a truthful reviewed notice and from Google’s eventual verification/security assessment. No publication, settings change or outreach occurred.

Backup-scope correction: Supabase managed backups/PITR are off. The retained-copy finding concerns the existing **Dev pre-migration deployment snapshots**, whose source is the real Dev database and restore target is a disposable rehearsal database. A fresh metadata-only listing confirms retained objects in the Dev snapshot bucket; no dump contents were opened. The inspected production workflow has no equivalent snapshot step. Do not describe this Dev cleanup issue as an established production backup gap.

## User-approved production-workflow wording

The user explicitly requested the narrow production-workflow statement. After rereading the production deployment source, the local public notice now says: “Our production deployment workflow does not create database snapshots.” It replaces the generic backup-copy sentence; operational-log retention remains accurately disclosed. The public paragraph does not discuss development snapshots, and it does not claim that no copies exist anywhere or that third-party providers have zero retention. The readable preview matches the website source. This is a local wording edit only, not publication or a change to any workflow, storage object or environment.

## Final publication preparation

Both reviewed legal pages now carry the proposed publication date October 22, 2026; refresh it if publication happens on another day. JSON, unique IDs, anchor targets, unrelated-page preservation and readable-preview parity pass. The independent final text review found no concrete blocker in the amended wording. The changes remain local and unpublished; website publication and Google submission are separate actions.
