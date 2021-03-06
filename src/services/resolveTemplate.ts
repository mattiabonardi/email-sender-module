import { TemplateVariables } from "../types/types.js";

/**
 * Resolve template with variables
 * @param templateName
 * @param variables
 * @returns
 */
export function resolveTemplate(content: string, variables: TemplateVariables) {
  // getting all variables from template
  const regex = /\$\{([A-z])\w+\}/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    // Evaluate variables
    if (m && m.length > 0) {
      const variableName = m[0].slice(2, -1);
      const variableValue = variables[variableName];
      if (variableValue) {
        content = content.replace(m[0], variableValue);
      }
    }
  }
  return content;
}
