# filetree-md v1.1.1
Output the file tree in markdown format for any repositories down to file leaves.

## Installation
```
npm i -g filetree-md
```

## Sample Use Case
In the command line
```
filetree <name_of_directory>
```

![GIF DEMO](https://github.com/BlockchainEduNet-HK/smart-contract-repo/blob/master/demo-of-filetree.gif)

## Output
A markdown file will be generated at current directory, with the following format:
```
# File Directory of .
- **.**
	- .gitignore
	- README.md
	- **bin**
		- demo-global.js
	- **lib**
		- index.js
	- **node_modules**
		- **directory-tree**
			- .npmignore
			- .travis.yml
			- README.md
			- **lib**
				- directory-tree.js
			- package.json
	- package-lock.json
	- package.json
```

## Future Updates
- Enable direct links [x]
- Enable path ignorance
- Enable customized format
- Enable file type ignorance

## Dependencies Version
1. directory-tree: ^2.1.0

