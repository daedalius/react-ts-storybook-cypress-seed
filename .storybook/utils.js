/**
 * Adds a description to the whole Storybook Story (CSF)
 * @param {Function} stories Storybook Stories (file default export)
 * @param {string} storyDescription Stories description to display on the "Docs" page. MD format allowed.
 */
export function describeStories(stories, description) {
  set(stories, 'parameters.docs.description.component', description)
  return stories
}

/**
 * Changes Storybook Story (CSF) name and adds a description
 * @param {Function} story Storybook Story
 * @param {string} storyName Story name to display on the navigation pane and on the "Docs" page
 * @param {string} storyDescription Story name to display on the "Docs" page. MD format allowed.
 */
export function describeStory(story, storyName, storyDescription) {
  set(story, 'storyName', storyName);
  set(story, 'story.parameters.docs.storyDescription', storyDescription);
  return story;
}

function set(obj, path, value) {
  const pList = path.split('.');
  const key = pList.pop();
  const pointer = pList.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue] === undefined) accumulator[currentValue] = {};
    return accumulator[currentValue];
  }, obj);
  pointer[key] = value;
  return obj;
}
