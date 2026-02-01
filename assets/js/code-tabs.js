function showCode(toolId, langId) {
  const blocks = document.querySelectorAll(
    `[id^="${toolId}-code-"]`
  );

  blocks.forEach(block => {
    block.hidden = !block.id.endsWith(langId);
  });
}
