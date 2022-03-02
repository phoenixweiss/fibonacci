# fibonacci
Various Algorithms to Calculate the nth Fibonacci Number

## Using fnm
https://github.com/Schniz/fnm

Adding a .node-version to your project is as simple as:

```sh
$ node --version
v14.18.3
$ node --version > .node-version
```

To install actual node version use:

```sh
fnm install < .node-version
```

### On Windows

__PowerShell__
Add the following to the end of your profile file:

```powershell
fnm env --use-on-cd | Out-String | Invoke-Expression
```
the profile is located at `$PROFILE`

### On MacOS

__zsh__
Add the following to your `.zshrc` profile:

```zsh
eval "$(fnm env --use-on-cd)"
```

## Common setup

### Install Corepack & Yarn
The preferred way to manage Yarn is through Corepack, a new binary shipped with all Node.js releases starting from 16.10. For Node.js >=16.10, Corepack is included by default with all Node.js installs, but is currently opt-in. To enable it, run the following command:

```sh
corepack enable
```

Install _yarn_:

```sh
yarn set version berry
```

Add ```nodeLinker: node-modules``` in your `.yarnrc.yml` file (if it's not already there).

Install dependencies:

```
yarn install
```