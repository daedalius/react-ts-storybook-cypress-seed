/**
 * Adds a title and description to a Storybook Story
 * @param {Object|Function} story Storybook Story
 * @param {string} storyName
 * @param {string} storyDescription
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
