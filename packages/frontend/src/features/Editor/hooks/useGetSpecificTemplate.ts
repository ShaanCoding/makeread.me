export default async function useGetSpecificTemplate(folderUrl: string) {
  // const index = await import(
  //   `../../../data/templates/${folderUrl}/index.njk`
  // ).then((module) => module.default.text());
  // const macros = await import(
  //   `../../../data/templates/${folderUrl}/macros.njk`
  // ).then((module) => module.default.text());

  const index = await fetch(`/templates/${folderUrl}/index.njk`).then((res) =>
    res.text()
  );

  const macros = await fetch(`/templates/${folderUrl}/macros.njk`).then((res) =>
    res.text()
  );

  return {
    index: index,
    macros: macros,
  };
}
