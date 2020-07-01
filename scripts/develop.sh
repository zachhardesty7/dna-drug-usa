# sh scripts/use-local-library.sh $1

export ENV_MODE="local"

BOLD="$(tput bold)"
RESET="$(tput sgr0)"

printf "${BOLD}building library in watch mode (yarn dev)$RESET\n\n"

path=$(mktemp)

cd $1

# force rollup to output ansi codes even when piped
export FORCE_COLOR="1"
# start watcher and send output to stdout and temp file
(yarn watch 2>&1 | tee "$path") &

# continuously read temp file while program is running
tail -F "$path" | while read line; do
  res=$(printf "$line" | grep -E "created .* in .*")
  if [ -n "$res" ]; then
    printf "\n${BOLD}library watcher started successfully, launching gatsby$RESET\n\n"
    cd -
    gatsby develop
    exit
  fi
done
