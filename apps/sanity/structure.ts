import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(() => "⚙️")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem()
        .title("Home Page")
        .icon(() => "🏠")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("Contact Page")
        .icon(() => "✉️")
        .child(S.document().schemaType("contactPage").documentId("contactPage")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          !["siteSettings", "homePage", "contactPage"].includes(item.getId() ?? "")
      ),
    ]);
