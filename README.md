# tbp
tbp app

Copyright © Tim Proyek Woto, 2016
All rights reserved


# Fonts

Main font is [Inter](https://fonts.google.com/specimen/Inter)

Heading font is Roboto


Naviation button font is [Nanum Gothic](https://fonts.google.com/specimen/Nanum+Gothic) optimized using [Fontimize](https://daveon.design/introducing-fontimize-subset-fonts-to-exactly-and-only-your-websites-used-characters.html)


## Tasks

### copy

Copies data from Paratext folder to `plm_texts` where SAB can find it. It also does some processing to bring footnotes inline with what we are doing (creating mini Glossary entries for them) and fixes some problems we had with figures.


```zsh
~/OneDrive/_Areas/10\ tbp_scripts/copy_tbp_files.py update-files
~/OneDrive/_Areas/10\ tbp_scripts/process_footnotes_to_glo.py prep "@"
~/OneDrive/_Areas/10\ tbp_scripts/fix_figures.py
```

### publish

Publish new version of the web app on github pages based on the html output from SAB.

Inputs: MSG

```zsh
if [ -z "$MSG" ]
then
    echo "No commit message given. Exiting"
else
~/OneDrive/_Areas/10\ tbp_scripts/copy_tbp_files.py update-app
~/OneDrive/_Areas/10\ tbp_scripts/replace_xrs.py
~/OneDrive/_Areas/10\ tbp_scripts/process_footnotes_to_glo.py finish 
./update-index.py
./update-metadata.py
git commit -a -m "$MSG"
git push
fi
```




