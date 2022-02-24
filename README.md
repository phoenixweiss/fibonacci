# fibonacci
Various Algorithms to Calculate the nth Fibonacci Number

## Using fnm
https://github.com/Schniz/fnm

Adding a .node-version to your project is as simple as:

```shell
$ node --version
v14.18.3
$ node --version > .node-version
```

### On Windows

__PowerShell__
Add the following to the end of your profile file:

```powershell
fnm env --use-on-cd | Out-String | Invoke-Expression
```
the profile is located at `$PROFILE`