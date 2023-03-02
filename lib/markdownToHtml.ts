import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

export default function markdownToHtml(markdown: string): string {
  return md.render(markdown);
}
