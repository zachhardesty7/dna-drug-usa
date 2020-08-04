reregister() {
  yarn unlink --cwd $1
}

reregister "$1/node_modules/react" &
reregister "$1/node_modules/react-dom" &
reregister "$1/node_modules/styled-components" &

# use local packages from component library
# yarn unlink --verbose react &
# yarn unlink --verbose react-dom &
# yarn unlink --verbose styled-components &
# yarn unlink --verbose semantic-styled-ui &
# yarn unlink semantic-ui-css &

wait
printf "\n$(tput bold)All library packages unlinked, reinstalling$(tput sgr0)\n"
yarn install --force
