import zipfile
import xml.etree.ElementTree as ET
import os

path = r"c:\Users\sahoo\OneDrive\Desktop\grow_mytherspy\Dr. Maya Reynolds, PsyD.docx"

try:
    with zipfile.ZipFile(path) as docx:
        xml_content = docx.read('word/document.xml')
        root = ET.fromstring(xml_content)
        
        # Namespace
        ns = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
        
        text_output = []
        
        # Iterate over all paragraphs
        for p in root.iter(f'{ns}p'):
            para_texts = []
            for node in p.iter(f'{ns}t'):
                if node.text:
                    para_texts.append(node.text)
            
            if para_texts:
                text_output.append(''.join(para_texts))
            else:
                text_output.append('') # Empty line
                
        print('\n'.join(text_output))

except Exception as e:
    print(f"Error: {e}")
