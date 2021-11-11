import os
import re


URL_PREFIX = "/tbp/"
APP_PREFIX = 'TBP_'
APP_VERSION = '01'
APP_FULL_NAME = 'Terjemahan Baso Plembang'
APP_SHORT_NAME = 'TBP'

def build_sw_urls(prefix, rootDir = '.'):
    output = [f"'{prefix}'"]
    for dirName, subdirList, fileList in os.walk(rootDir, topdown=False):
        if ".git" in dirName or '.templates' in dirName:
            continue              
        dname = dirName.replace(".\\", "")
        for fname in fileList:
            if dname == ".":
                if ".js" in fname or '.py' in fname:
                    pass
                elif fname in ["LICENSE", "manifest.webmanifest", "README.md"]:
                    pass
                else:
                    output.append(f"'{prefix}{fname}'".replace('\\', '/'))
            else:
                output.append(f"'{prefix}{dname}/{fname}'".replace('\\', '/'))
    return ',\n'.join(output)


def load_and_sub_templates(template_name, vars):
    with open(os.path.join('.templates', template_name), 'r', encoding='UTF-8') as f:
        template = f.read()
        for var in vars:
            template = template.replace(var[0], var[1])
        return template


def build_sw_file(app_prefix, app_version, url_prefix):
    urls = build_sw_urls(url_prefix, '.')
    subs = [
    ('$$app_prefix$$', app_prefix),
    ('$$app_version$$', app_version),
    ('$$urls$$', urls)
    ]
    
    return load_and_sub_templates('sw_template.txt', subs)
    
def build_manifest_file(full_name, short_name):
    subs = [
    ('$$full_name$$', full_name),
    ('$$short_name$$', short_name)
    ]
    return load_and_sub_templates('manifest_template.txt', subs)


def modify_index_html(url_prefix, start_file):
    text = ''
    with open('index.html', 'r', encoding="UTF-8") as f:
        text = f.read()
    target = "// -->"
    SW_DATA = "if (navigator.serviceWorker) {\n" +   f"navigator.serviceWorker.register('{url_prefix}sw.js', " + "{scope: '" + url_prefix + "'})\n}"
    text = text.replace(target, target + SW_DATA)
    PWA_LINE = "<script type='text/javascript' src='./pwa-main.js'></script>"
    text = text.replace(PWA_LINE, '')
    text = re.sub(r'location.href = .*\n', 'location.href = ' + start_file + ';\n' , text)
    with open('index.html', 'w', encoding="UTF-8") as f:
        f.write(text)

def clean_files():
    for x in ['pwa-main.js', 'sw.js.map', 'workbox-5133f1ba.js', 'workbox-5133f1ba.js.map', 'workbox-config.js']:
        if os.path.isfile(x):
            os.remove(x)
        
    

def main():
    with open('sw.js', 'w', encoding="UTF-8") as f:
        f.write(build_sw_file(APP_PREFIX, APP_VERSION, URL_PREFIX))
    with open('manifest.webmanifest', 'w', encoding="UTF-8") as f:
        f.write(build_manifest_file(APP_FULL_NAME, APP_SHORT_NAME))
    modify_index_html(URL_PREFIX, "'Aktb-01-FRT-001.html'")
    clean_files()
        
main()
