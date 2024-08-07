// src/index.js (or src/index.mjs)
import { analyzeCommits as originalAnalyzeCommits } from '@semantic-release/commit-analyzer';
import { generateNotes as originalGenerateNotes } from '@semantic-release/release-notes-generator';
import { getUnsquashedCommits } from './get-unsquashed-commits.js';

export const analyzeCommits = async (pluginConfig, context) => {
  const { commitAnalyzerConfig } = pluginConfig || {};
  const commits = getUnsquashedCommits(context);

  return originalAnalyzeCommits(commitAnalyzerConfig ?? {}, {
    ...context,
    commits,
  });
};

export const generateNotes = async (pluginConfig, context) => {
  const { notesGeneratorConfig } = pluginConfig || {};
  const commits = getUnsquashedCommits(context);

  return originalGenerateNotes(notesGeneratorConfig ?? {}, {
    ...context,
    commits,
  });
};
