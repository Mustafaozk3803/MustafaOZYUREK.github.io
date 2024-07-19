import os

# Chemins vers les fichiers CSS et JS
css_link = '<link rel="stylesheet" href="style.css">'
js_link = '<script src="app.js"></script>'

# Contenu HTML à ajouter
suggestions_div = '<div id="suggestions" class="suggestions"></div>'

# Fonction pour mettre à jour un fichier HTML
def update_html_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    if css_link not in content:
        content = content.replace('</head>', f'{css_link}\n</head>')
    
    if js_link not in content:
        content = content.replace('</body>', f'{js_link}\n</body>')

    if '<input' in content and 'id="search-input"' not in content:
        content = content.replace('<input', '<input id="search-input"', 1)
        content = content.replace('</form>', f'{suggestions_div}\n</form>', 1)

    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

# Dossier contenant les fichiers HTML
directory = 'path/to/html/files'

# Mettre à jour tous les fichiers HTML dans le dossier
for filename in os.listdir(directory):
    if filename.endswith('.html'):
        file_path = os.path.join(directory, filename)
        update_html_file(file_path)

print("Mise à jour des fichiers HTML terminée.")
