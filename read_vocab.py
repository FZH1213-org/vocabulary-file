# 尝试使用各种方法读取xls文件
import sys
try:
    import pandas as pd
    df = pd.read_excel('demo/考研英语词汇乱序版.xls')
    print(f'总词汇量: {len(df)}')
    print(f'列名: {list(df.columns)}')
    # 提取前20个单词
    print('\n前20个单词:')
    for i in range(min(20, len(df))):
        print(df.iloc[i].to_dict())
except Exception as e:
    print(f'Error: {e}')
    # 尝试其他方法
    try:
        import openpyxl
        wb = openpyxl.load_workbook('demo/考研英语词汇乱序版.xls')
        ws = wb.active
        rows = list(ws.rows)
        print(f'总词汇量: {len(rows) - 1}')
        print(f'前10行:')
        for i, row in enumerate(rows[:10]):
            print([cell.value for cell in row])
    except Exception as e2:
        print(f'Error2: {e2}')