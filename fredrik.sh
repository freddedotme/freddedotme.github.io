#!/bin/bash

BIG_DIVIDER="================================================================================"
SMALL_DIVIDER="--"

run(){
  case "$1" in
    "") echo "./fredrik.sh <education:links:about:projects>"
    ;;
    "education")
      echo $BIG_DIVIDER
      echo "   ____   __              __  _         "
      echo "  / __/__/ /_ _________ _/ /_(_)__  ___ "
      echo " / _// _  / // / __/ _ \`/ __/ / _ \/ _ \\"
      echo "/___/\_,_/\_,_/\__/\_,_/\__/_/\___/_//_/"
      echo ""
      echo "C U R R E N T"
      echo ""
      echo $SMALL_DIVIDER
      echo "Bachelor's degree, Computer Science"
      echo "School: Uppsala University"
      echo "Duration: 16' - current"
      echo "Location: Uppsala, Sweden"
      echo $SMALL_DIVIDER
      echo ""
      echo "P A S T"
      echo ""
      echo $SMALL_DIVIDER
      echo "Mobile Design & Development"
      echo "School: Hyper Island"
      echo "Duration: 13'-14'"
      echo "Location: Karlskrona, Sweden"
      echo $SMALL_DIVIDER
      echo ""
      echo $SMALL_DIVIDER
      echo "Highschool, Data/IT"
      echo "School: Tycho Brahe"
      echo "Duration: 09' - 12'"
      echo "Location: Helsingborg, Sweden" 
      echo $SMALL_DIVIDER
      echo ""
      echo $BIG_DIVIDER
    ;;
    "links") echo "Links"
    ;;
    "about") echo "About"
    ;;
    "projects") echo "Projects"
    ;;
  esac
}

run $1
