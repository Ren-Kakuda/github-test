def min(a, b)
    if a < b
        puts a
    else
        puts b
    end
end
# どっちが小さいかを判断して出力する(put)


def max(a, b)
    if a > b
        puts a
    else
        puts b
    end
end
# 大きいほうを出力する
# defは定義define maxという関数をdefineしている


# 線形探索法
def linearSearchFunc(numbers, value)
    i = 0
    while i < numbers.length
      if numbers[i] == value
        return i
      end
      i += 1
    end
    return "None"
  end
  numbers = [1, 3, 5, 11, 12, 13, 17, 22, 25, 28]
  targetNumber = 12
  p linearSearchFunc(numbers, targetNumber)


# 二分探索法　
def binarySearchFunc(numbers, value)
    head = 0 # 先頭のインデックス番号
    tail = numbers.length - 1 # 末尾のインデックス番号
    while head <= tail
      center = ((head + tail) / 2.0).round # 配列の中央のインデックス番号
      if numbers[center] == value
        return center
      elsif numbers[center] < value
        head = center + 1
      else
        tail = center - 1
      end
    end
    return "None"
  end
  numbers = [1, 3, 5, 11, 12, 13, 17, 22, 25, 28]
  targetNumber = 12
  p binarySearchFunc(numbers, targetNumber)

# バブルソート
  def bubbleSearchFunc(value)
    count = value.length
    i = 0
    while i < count
      #p value
      j = 1
      while j < count - i
        if value[j-1] > value[j] # 値を比較する
          value[j-1], value[j] = value[j], value[j-1] # 値を入れ替える
        end
        j += 1
      end
      i += 1
    end
    return numbers
  end
  numbers = [100,50,25,4,1]
  p bubbleSearchFunc(numbers)


  #クイックソート
  def quickSortFunc(numbers)
    # (3)分けたデータに対し繰り返し処理を実行(条件式)
    if numbers.length < 2
      return numbers
    end
    # return numbers if numbers.length < 2
    # (1)先頭の要素を基準値にする
    targetNumber = numbers.shift
    # (2)データを大小に分ける
    smallData = []
    largeData = []
    numbers.each do |number|
      if number < targetNumber
        smallData << number
      else
        largeData << number
      end
    end
    #p smallData => 一回目の処理結果 [2, 1, 3]
    #p largeData => 一回目の処理結果 [8, 6, 5, 9, 7]
    # (4)分けたデータに対し繰り返し処理を実行(再帰処理)
    quickSortFunc(smallData) + [targetNumber] + quickSortFunc(largeData)
  end
  numbers = [4, 8, 6, 5, 2, 1, 3, 9, 7]
  p quickSortFunc(numbers)



