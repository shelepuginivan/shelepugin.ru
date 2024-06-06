#!/usr/bin/env bash
set -e
PROGRAM_NAME=$(basename $0)

# Default settings
COLOR="#ffffff"
FONT_SIZE="48"
FONT="$HOME/.local/share/fonts/JetBrainsMono/fonts/ttf/JetBrainsMono-Medium.ttf"
OUTPUT="social.png"
TEMPLATE="template.png"
OFFSET_X=128
OFFSET_Y=256

help() {
	echo "Usage: $PROGRAM_NAME [OPTIONS]"
	echo "Generate social cards using ImageMagick."
	echo
	echo "Options:"
	echo "  -h             Show this help message and exit"
    echo "  -b BASE        Specify the base template of the social card (default: $TEMPLATE)"
    echo "  -c COLOR       Specify text color (default: $COLOR)"
    echo "  -f FONT        Specify text font"
	echo "  -o OUTPUT      Specify the output file (default: $OUTPUT)"
    echo "  -s SIZE        Specify the font size in px (default: $FONT_SIZE)"
    echo "  -t TITLE       Specify the title of the card"
    echo "  -x OFFSET_X    Specify the horizontal offset for the text (default: $OFFSET_X)"
    echo "  -y OFFSET_Y    Specify the vertical offset for the text (default: $OFFSET_Y)"
	echo
	echo "Example:"
	echo "  $PROGRAM_NAME -f 'JetBrains Mono' -t 'Lorem Ipsum Dolor Sit Amet' -x 96 -y 96 -s 48"
	echo
}

while getopts ":h?:f:t:b:o:s:x:y:" OPTION; do
    case "$OPTION" in
        \? | h)
            help
            exit
            ;;
        f)
            if [ -n "$OPTARG" ]; then
                FONT="$OPTARG"
            fi
            ;;
        t)
            TITLE="$OPTARG"
            ;;
        b)
            if [ -n "$OPTARG" ]; then
                TEMPLATE="$OPTARG"
            fi
            ;;
        o)
            if [ -n "$OPTARG" ]; then
                OUTPUT="$OPTARG"
            fi
            ;;
        s)
            if [ -n "$OPTARG" ]; then
                FONT_SIZE="$OPTARG"
            fi
            ;;
        x)
            if [ -n "$OPTARG" ]; then
                OFFSET_X="$OPTARG"
            fi
            ;;
        y)
            if [ -n "$OPTARG" ]; then
                OFFSET_Y="$OPTARG"
            fi
            ;;
    esac
done

if ! command -v convert  &> /dev/null; then
    echo "error: convert not found"
    echo "ImageMagick is required for this script to run"
    exit 1
fi

if [ -z "$TITLE" ]; then
    echo "warning: empty title"
fi

magick "$TEMPLATE"                            \
    -pointsize "$FONT_SIZE"                   \
    -font "$FONT"                             \
    -fill "$COLOR"                            \
    -annotate "+$OFFSET_X+$OFFSET_Y" "$TITLE" \
    "$OUTPUT"
