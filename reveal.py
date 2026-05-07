#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
ПРОТОКОЛ ИЗВЛЕЧЕНИЯ МАНИФЕСТА
----------------------------
Этот скрипт предназначен для чтения скрытого текстового слоя в 
изображении 'final_secret.png'. Используется метод LSB (Least Significant Bit).
"""

from PIL import Image
import sys

def extract_message(image_path):
    try:
        # Открываем изображение и переводим в RGB, чтобы избежать ошибок альфа-канала
        img = Image.open(image_path).convert('RGB')
        pixels = list(img.getdata())
        
        # Собираем все младшие биты из каждого цветового канала (R, G, B)
        bits = ""
        for pixel in pixels:
            for color_channel in pixel:
                bits += str(color_channel & 1)
        
        # Наш стоп-маркер (16 бит: 1111111111111110)
        stop_indicator = '1111111111111110'
        end_idx = bits.find(stop_indicator)
        
        if end_idx == -1:
            return "ОШИБКА: Маркер конца сообщения не найден. Возможно, файл поврежден."
        
        # Отсекаем лишние биты после маркера
        bits = bits[:end_idx]
        
        # Группируем биты по 8 (в байты) и преобразуем в текст (UTF-8)
        byte_list = [int(bits[i:i+8], 2) for i in range(0, len(bits), 8)]
        decoded_text = bytes(byte_list).decode('utf-8')
        
        return decoded_text

    except FileNotFoundError:
        return f"ОШИБКА: Файл {image_path} не найден."
    except Exception as e:
        return f"ПРОИЗОШЛА КРИТИЧЕСКАЯ ОШИБКА: {e}"

if __name__ == "__main__":
    target = "final_secret.png"
    print(f"[*] Анализ носителя: {target}...")
    
    result = extract_message(target)
    
    print("\n" + "="*30)
    print("ИЗВЛЕЧЕННОЕ ПОСЛАНИЕ:")
    print("="*30 + "\n")
    print(result)
    print("\n" + "="*30)
