# action-setup-vim-plug

Set up [**vim-plug**](https://github.com/junegunn/vim-plug) in a GitHub Actions workflow.

## Usage

```yaml
- uses: porada/action-setup-vim-plug@v1
- run: |
    vim -e \
      +'call plug#begin()' \
      +'call plug#end()' \
      +'PlugInstall --sync' \
      +'qall!'
```

This action doesn’t install Vim. Make sure it’s available beforehand:

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: rhysd/action-setup-vim@v1
      - uses: porada/action-setup-vim-plug@v1
```
