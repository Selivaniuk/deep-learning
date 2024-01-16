module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
		'plugin:prettier/recommended',
		'plugin:import/recommended',
		"plugin:import/typescript",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
	"settings": {
		"import/parsers": {
			"@typescript-eslint/parser": ['.js', 'jsx', ".ts", ".tsx"]
		  },
		  "import/resolver": {
			"typescript": true,
			"node": true,
		  }
	  },
    "plugins": [
        "react"
    ],
    "rules": {
		"import/order": [
			"error",
			{
			  "groups": ["external", "builtin", "index", "sibling", "parent", "internal", "type"],
			  "alphabetize": {
				"order": "asc",
				"caseInsensitive": true
			  },
			  "newlines-between": "always-and-inside-groups"
			}
		  ],
		'react/react-in-jsx-scope': 0,
		"import/named":0,
    }
}
