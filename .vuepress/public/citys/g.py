# coding=utf-8
import os
import re

# 山东省城市列表（包含中文名称和拼音）
shandong_cities = [
    {"name": "muban", "pinyin": "index"},
    {"name": "济南", "pinyin": "jinan"},
    {"name": "青岛", "pinyin": "qingdao"},
    {"name": "淄博", "pinyin": "zibo"},
    {"name": "枣庄", "pinyin": "zaozhuang"},
    {"name": "东营", "pinyin": "dongying"},
    {"name": "烟台", "pinyin": "yantai"},
    {"name": "潍坊", "pinyin": "weifang"},
    {"name": "济宁", "pinyin": "jining"},
    {"name": "泰安", "pinyin": "taian"},
    {"name": "威海", "pinyin": "weihai"},
    {"name": "日照", "pinyin": "rizhao"},
    {"name": "临沂", "pinyin": "linyi"},
    {"name": "德州", "pinyin": "dezhou"},
    {"name": "聊城", "pinyin": "liaocheng"},
    {"name": "滨州", "pinyin": "binzhou"},
    {"name": "菏泽", "pinyin": "heze"}
]

def generate_city_pages(template_file):
    """根据模板文件生成所有城市的HTML页面"""
    try:
        # 读取模板文件内容
        with open(template_file, 'r', encoding='utf-8') as file:
            template_content = file.read()
            template_content = remove_scripts_between_div_and_body(template_content)
        # 获取模板文件对应的城市信息
        template_pinyin = os.path.splitext(os.path.basename(template_file))[0]
        template_city = next((city for city in shandong_cities if city["pinyin"] == template_pinyin), None)
        
        if not template_city:
            print(f"警告: 无法识别模板文件对应的城市: {template_file}")
            return
        
        # 生成每个城市的页面
        for city in shandong_cities:
            if city["pinyin"] == template_pinyin:
                continue  # 跳过模板城市本身
            
            # 替换内容中的城市名称
            new_content = re.sub(template_city["name"], city["name"], template_content)
            
            # 生成新文件
            new_filename = f"{city['pinyin']}.html"
            with open(new_filename, 'w', encoding='utf-8') as file:
                file.write(new_content)
            
            print(f"已生成: {new_filename}")
    
    except FileNotFoundError:
        print(f"错误: 找不到模板文件: {template_file}")
    except Exception as e:
        print(f"错误: 发生未知错误: {e}")


def remove_scripts_between_div_and_body(html_content):
    # 正则表达式匹配模式：
    # 1. 匹配</div>标签
    # 2. 匹配中间所有内容（包括换行和script标签）
    # 3. 匹配</body>标签
    # 使用分组保留前后部分，替换中间部分
    pattern = r'(</main>)\s*.*?\s*(</body>)'
    
    # 保留</div>和</body>，移除中间内容
    # re.DOTALL使.匹配包括换行符在内的所有字符
    cleaned_content = re.sub(
        pattern,
        r'\1\n  \2',  # 保留前后标签，添加适当缩进
        html_content,
        flags=re.DOTALL
    )
    
    return cleaned_content

if __name__ == "__main__":
    template_file = "../index.html"  # 模板文件
    generate_city_pages(template_file)    