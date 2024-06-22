export const capWords = (str) => {
  return str.replace(/(?:^|\s)\w/g, (match) => {
    return match.toUpperCase();
  });
};

export const getNumberFromString = (string) => {
  let result = string.match(/\d+/);
  let number = parseInt(result[0]);
  return number;
}

export const parseDate = (dateStr) => {
  const parts = dateStr.split(`, `);
  const timePart = parts[0];
  const datePart = parts[1];
  const datePartWithoutSuffix = datePart.replace(/(\d+)(st|nd|rd|th)/, `$1`);
  const newDateStr = `${datePartWithoutSuffix}, ${timePart}`;
  return new Date(newDateStr);
}

export const genUUIDNumbers = (existingIDs) => {
  let newID;
  do {
    newID = Math.floor(Math.random() * 1000000); // generate a random integer between 0 and 999999
  } while (existingIDs.includes(newID)); // keep generating a new ID until it's not already in the existing IDs array
  return newID;
}

export const updateOrAdd = (obj, arr) => {
  let index = arr.findIndex((item) => item.name === obj.name);
  if (index !== -1) {
    arr[index] = obj;
  } else {
    arr.push(obj);
  }
  return arr;
};

export const removeNullAndUndefinedProperties = (object) => {
  return Object.entries(object).reduce((accumulator, [key, value]) => {
    if (value !== null && value !== undefined) {
      accumulator[key] = value;
    }
    return accumulator;
  }, {});
}

export const removeDuplicateObjectFromArray = (arrayOfObjects) => {
  const uniqueArray = arrayOfObjects?.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === arrayOfObjects?.findIndex((obj) => {
      return JSON.stringify(obj) === _value;
    });
  });
  return uniqueArray;
};

export const countPropertiesInObject = (obj) => {
  let count = 0;
  // Base condition to check if the input is an object
  if (typeof obj === 'object' && obj !== null) {
    for (const key in obj) {
      count++; // Count the current key
      count += countPropertiesInObject(obj[key]); // Recursively count keys in nested objects
    }
    // If the object is an array, iterate over its elements
    if (Array.isArray(obj)) {
      obj.forEach(item => {
        count += countPropertiesInObject(item); // Recursively count keys in nested objects within the array
      });
    }
  }
  return count;
}