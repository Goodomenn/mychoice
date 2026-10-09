import os, re

files = {
    'Home.jsx': {'title': 'MyChoiceEthiopia | Premium Ethiopia Tours & Travel Guide', 'desc': 'Experience the wonders of Ethiopia. From the historic Lalibela churches to the stunning Simien Mountains.', 'url': 'https://mychoiceethiopia.com/'},
    'Destinations.jsx': {'title': 'Ethiopia Destinations | Lalibela, Danakil, Omo Valley', 'desc': 'Explore Ethiopia\'s top destinations including the ancient obelisks of Axum, the castles of Gondar, and the Danakil Depression.', 'url': 'https://mychoiceethiopia.com/destinations'},
    'Tours.jsx': {'title': 'Ethiopia Tour Packages & Expeditions | MyChoiceEthiopia', 'desc': 'Browse our comprehensive list of Ethiopian tour packages. Cultural immersion, adventure trekking, historic circuits, and more.', 'url': 'https://mychoiceethiopia.com/tours'},
    'Blog.jsx': {'title': 'Travel Blog | Ethiopia Travel Tips & Guides', 'desc': 'Read the latest stories, travel tips, and cultural guides about visiting Ethiopia on the MyChoiceEthiopia blog.', 'url': 'https://mychoiceethiopia.com/blog'},
    'Contact.jsx': {'title': 'Contact MyChoiceEthiopia | Book Your Tour', 'desc': 'Get in touch with MyChoiceEthiopia to book your premium tour, request a custom itinerary, or inquire about logistics.', 'url': 'https://mychoiceethiopia.com/contact'},
    'CorporateFleet.jsx': {'title': 'Corporate Fleet Logistics | MyChoiceEthiopia', 'desc': 'Professional corporate fleet and logistics services in Ethiopia.', 'url': 'https://mychoiceethiopia.com/corporate-fleet'},
    'Governance.jsx': {'title': 'Governance & Policies | MyChoiceEthiopia', 'desc': 'Learn about MyChoiceEthiopia\'s corporate governance, sustainability practices, and policies.', 'url': 'https://mychoiceethiopia.com/governance'}
}

for filename, seo in files.items():
    filepath = os.path.join(r'D:\neh\Zteklay\client\src\pages', filename)
    if not os.path.exists(filepath): continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'Helmet' in content: continue
    
    content = 'import { Helmet } from \'react-helmet-async\'\n' + content
    
    helmet_block = f'''<Helmet>\n        <title>{seo['title']}</title>\n        <meta name=\"description\" content=\"{seo['desc']}\" />\n        <link rel=\"canonical\" href=\"{seo['url']}\" />\n      </Helmet>'''
      
    content = re.sub(r'(return\s*\(\s*(?:<>|<div[^>]*>|<main[^>]*>|<section[^>]*>))', r'\1\n      ' + helmet_block, content, count=1)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
