[![](https://img.shields.io/github/actions/workflow/status/porada/action-setup-vim-plug/test.yaml)](https://github.com/porada/action-setup-vim-plug/actions/workflows/test.yaml)

# action-setup-vim-plug

Set up [**vim-plug**](https://github.com/junegunn/vim-plug) in a GitHub Actions workflow.

## Usage

```yaml
- uses: porada/action-setup-vim-plug@v1
- run: |
    vim -n \
      +'call plug#begin()' \
      +"Plug 'tpope/vim-sensible'" \
      +'call plug#end()' \
      +'PlugInstall --sync' \
      +'qall!'
```

This action doesn’t install Vim. Make sure it’s available beforehand:

```yaml
jobs:
  test:
    runs-on: macos-latest
    steps:
      - run: brew install vim
      - uses: porada/action-setup-vim-plug@v1
```
