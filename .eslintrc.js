module.exports = {
  "extends": "airbnb-base",
  "env": {
    "browser": false,
    "node": true,
    "es6": true
  },  
  "parserOptions": {
    "ecmaVersion": 6
  },
  "rules": {
    // Because airbnb devs using "i += 1" on for loops are definitely on drugs
    "no-plusplus": [
      "error", 
      { 
        "allowForLoopAfterthoughts": true 
      }
    ],
    // Otherwise won't play well with context.res reassign from Azure
    "no-param-reassign": [
      "error", 
      { 
        "props": false
      }
    ],
    // Mongo DB uses this
    "no-underscore-dangle": [
      "error", 
      {
        "allow": ["_id"] 
      }
    ]
  },
};