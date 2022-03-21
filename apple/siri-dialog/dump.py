#!/usr/bin/env python3

import csv
import os

import frida

def main():
    with open(os.path.join(os.path.dirname(__file__), 'dump.js'), encoding='utf-8') as f:
        source = f.read()
    session = frida.get_usb_device().attach('assistantd')
    script = session.create_script(source)
    script.load()
    results = script.exports.dump()
    session.detach()
    for locale, pairs in results.items():
        assert locale == os.path.basename(locale)
        with open('%s.csv' % locale, 'w', encoding='utf-8') as f:
            writer = csv.writer(f, lineterminator='\n')
            for pair in reversed(pairs):
                writer.writerow(pair)

if __name__ == '__main__':
    main()
