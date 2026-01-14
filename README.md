[![](https://img.shields.io/badge/action-v1-informational)](https://github.com/porada/action-setup-vim-plug/tree/v1)
[![](https://img.shields.io/github/actions/workflow/status/porada/action-setup-vim-plug/test.yaml)](https://github.com/porada/action-setup-vim-plug/actions/workflows/test.yaml)

# action-setup-vim-plug

Set up [**vim-plug**](https://github.com/junegunn/vim-plug) in a GitHub Actions workflow.

## Usage

```yaml
- uses: porada/action-setup-vim-plug@v1
- run: |
    vim -es \
      +"call plug#begin()" \
      +"Plug 'tpope/vim-sensible'" \
      +"Plug 'tpope/vim-surround'" \
      +"call plug#end()" \
      +"PlugInstall --sync" \
      +"qall!"
```

### Prerequisites

This action doesn’t install Vim, so make sure it’s available beforehand.

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: rhysd/action-setup-vim@v1
      - uses: porada/action-setup-vim-plug@v1
```

> [!CAUTION]
> Most `Plug*` commands rely on Vim’s GUI features and may fail in CI unless a headless build is used.

## Supported Inputs

### autoload-dir

Custom installation path for `plug.vim`. Necessary when using Neovim.

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: rhysd/action-setup-vim@v1
        with:
          neovim: true
      - uses: porada/action-setup-vim-plug@v1
        with:
          autoload-dir: '$HOME/.local/share/nvim/site/autoload'
```
