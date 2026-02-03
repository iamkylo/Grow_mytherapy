import zipfile
import xml.etree.ElementTree as ET

path = r"c:\Users\sahoo\OneDrive\Desktop\grow_mytherspy\Dr. Maya Reynolds, PsyD.docx"

try:
    with zipfile.ZipFile(path) as docx:
        xml = docx.read('word/document.xml')
        root = ET.fromstring(xml)
        ns = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
        
        texts = []
        for t in root.iter(f'{ns}t'):
            if t.text:
                texts.append(t.text)
                
        print('SEP'.join(texts))
except Exception as e:
    print(e)
