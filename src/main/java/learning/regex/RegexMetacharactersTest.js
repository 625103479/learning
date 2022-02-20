/**
 * 正则表达式常见的元字符.
 */

const metacharacters = () => {
  /**
   * character: \
   * describe: 将下一个字符标记为一个特殊字符、或一个原义字符、或一个 向后引用、或一个八进制转义符。
   * 例如，'n' 匹配字符 "n"。'\n' 匹配一个换行符。序列 '\\' 匹配 "\" 而 "\(" 则匹配 "("。
   */ {
    console.log('字符: \\')
    let regexOne = /(123)/g
    let regexTwo = /\(123\)/g
    console.log('(123)'.match(regexOne))
    console.log('(123)'.match(regexTwo))
  }

  /**
   * character: ^
   * describe: 匹配输入字符串的开始位置。
   * 如果设置了 RegExp 对象的 Multiline 属性，^ 也匹配 '\n' 或 '\r' 之后的位置。
   */ {
    console.log('字符: ^')
    let regexOne = /abcdefg/
    let regexTwo = /^abcdefg/
    console.log('---abcdefg--'.match(regexOne))
    console.log('---abcdefg--'.match(regexTwo))
  }

  /**
   * character: $
   * describe:匹配输入字符串的结束位置。
   * 如果设置了RegExp 对象的 Multiline 属性，$ 也匹配 '\n' 或 '\r' 之前的位置。
   */ {
    console.log('字符: $')
    let regexOne = /abcdefg/
    let regexTwo = /abcdefg$/
    console.log('---abcdefg--'.match(regexOne))
    console.log('---abcdefg--'.match(regexTwo))
  }

  /**
   * character: *  + ? {n} {n,} {n,m} ?
   * describe:
   *    *: 匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于{0,}。
   *    +: 匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。
   *    ?: 匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 或 "does" 。? 等价于 {0,1}。
   *    {n}: n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。
   *    {n,}: n 是一个非负整数。至少匹配n 次。例如，'o{2,}' 不能匹配 "Bob" 中的 'o'，但能匹配 "foooood" 中的所有 o。'o{1,}' 等价于 'o+'。'o{0,}' 则等价于 'o*'。
   *    {n,m}: m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。例如，"o{1,3}" 将匹配 "fooooood" 中的前三个 o。'o{0,1}' 等价于 'o?'。请注意在逗号和两个数之间不能有空格。
   *    ?: 当该字符紧跟在任何一个其他限制符 (*, +, ?, {n}, {n,}, {n,m}) 后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串 "oooo"，'o+?' 将匹配单个 "o"，而 'o+' 将匹配所有 'o'。
   */ {
    console.log('匹配数量限制: *  + ? {n} {n,} {n,m} ?')

    console.log('==> * ')
    let regexOne = /(abc)*/g
    console.log('abcabcabc'.match(regexOne))
    console.log('abcabc'.match(regexOne))
    console.log('haksjdhals'.match(regexOne))

    console.log('==> + ')
    let regexTwo = /(abc)+/g
    console.log('abcabcabc'.match(regexTwo))
    console.log('abcabc'.match(regexTwo))
    console.log('haksjdhals'.match(regexTwo))

    console.log('==> ? ')
    let regexThree = /(abc)?/g
    console.log('abcabcabc'.match(regexThree))
    console.log('abcabc'.match(regexThree))
    console.log('haksjdhals'.match(regexThree))

    console.log('==> {n,m} 数量约束 ')

    console.log('固定匹配3个:')
    let regexFour = /(abc){3}/g
    console.log('abcabcabc'.match(regexFour))
    console.log('abcabc'.match(regexFour))
    console.log('abcabcabcabc'.match(regexFour))

    console.log('匹配3个以上:')
    let regexFive = /(abc){3,}/g
    console.log('abcabcabc'.match(regexFive))
    console.log('abcabcabcabc'.match(regexFive))
    console.log('abcabc'.match(regexFive))

    console.log('匹配2个或3个:')
    let regexSix = /(abc){2,3}/g
    console.log('abcabcabc'.match(regexSix))
    console.log('abcabcabcabc'.match(regexSix))
    console.log('abcabc'.match(regexSix))
    console.log('abc'.match(regexSix))

    console.log('贪婪模式与非贪婪模式:(默认为贪婪模式)')
    let regexSeven = /ab.*c/g
    let regexEight = /ab.*?c/g

    console.log('ab1caxc'.match(regexSeven))
    console.log('ab1caxc'.match(regexEight))
  }

  /**
   * character: .
   * describe:匹配除换行符（\n、\r）之外的任何单个字符。
   * 要匹配包括 '\n' 在内的任何字符，请使用像"(.|\n)"的模式。
   */ {
    console.log('字符: .')
    let regexOne = /.*/
    console.log('aaa\nbbb\rccc'.match(regexOne))
    console.log('\naaa\nbbb\rccc'.match(regexOne))
  }

  /**
   * character: (pattern)
   * describe:匹配 pattern 并获取这一匹配
   * 在JScript、java 中则使用 $0…$9 属性。要匹配圆括号字符，请使用 '\(' 或 '\)'。
   * 可以使用分组命名(?<name>) 对分组进行命名,方便后续提取数据
   */ {
    console.log('字符: (pattern)')
    let regexOne = /(?<name>.*)\|(?<age>.*)\|(.*)/
    console.log({ ...'张三|18|上海'.match(regexOne).groups })
    // 在java中除了$0...$9 还能根据${name}提取自定义组名的数据
    console.log('张三|18|上海'.replace(regexOne, '姓名:$1,籍贯:$3,年龄:$2'))
  }

  /**
   * character: (?:pattern)
   * describe:匹匹配 pattern 但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。
   * 这在使用 "或" 字符 (|) 来组合一个模式的各个部分是很有用。
   * 例如， 'industr(?:y|ies) 就是一个比 'industry|industries' 更简略的表达式
   * 简单理解,相当于匿名分组匹配,但不存储匹配到的信息.使用$0...$9无法取得对应的匹配值
   */ {
    console.log('字符: (?:pattern)')
    let regexOne = /(?:[0-9]*)([a-z]*)([0-9]*)/
    console.log('123abc456ww'.match(regexOne))
    console.log('abc456ww'.match(regexOne))
  }

   /**
   * character: (?=pattern)
   * describe:正向肯定预查（look ahead positive assert），
   * 在任何匹配pattern的字符串开始处匹配查找字符串。
   * 这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。
   * 例如，"Windows(?=95|98|NT|2000)"能匹配"Windows2000"中的"Windows"，但不能匹配"Windows3.1"中的"Windows"。
   * 预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。
   */ {
    console.log('字符: (?=pattern)')
    let regexOne = /Windows(?=95|98|NT|2000)/
    console.log('Windows2000'.match(regexOne))
    console.log('Windows3.1'.match(regexOne))
    let regexTwo = /(?=上海市).*?区/
    console.log('上海市浦东新区'.match(regexTwo))
    console.log('杭州市余杭区'.match(regexTwo))
  }

    /**
   * character: (?!pattern)
   * describe:正向否定预查(negative assert)，在任何不匹配pattern的字符串开始处匹配查找字符串。
   * 这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。
   * 例如"Windows(?!95|98|NT|2000)"能匹配"Windows3.1"中的"Windows"，但不能匹配"Windows2000"中的"Windows"。
   * 预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。
   */ {
    console.log('字符: (?!pattern)')
    let regexOne = /Windows(?!95|98|NT|2000)/
    console.log('Windows2000'.match(regexOne))
    console.log('Windows3.1'.match(regexOne))
  }

    /**
   * character: (?<=pattern)
   * describe:反向(look behind)肯定预查，与正向肯定预查类似，只是方向相反。
   * 例如，"(?<=95|98|NT|2000)Windows"能匹配"2000Windows"中的"Windows"，但不能匹配"3.1Windows"中的"Windows"
   */ {
    console.log('字符: (?<=pattern)')
    let regexOne = /(?<=95|98|NT|2000)Windows/
    console.log('2000Windows'.match(regexOne))
    console.log('3.1Windows'.match(regexOne))
    let regexTwo = /(?<=上海市).*?区/
    console.log('上海市浦东新区'.match(regexTwo))
    console.log('杭州市余杭区'.match(regexTwo))
  }

  /**
   * character: ((?<!pattern))
   * describe:反向否定预查，与正向否定预查类似，只是方向相反。
   * 例如"(?<!95|98|NT|2000)Windows"能匹配"3.1Windows"中的"Windows"，但不能匹配"2000Windows"中的"Windows"。
   */ {
    console.log('字符: (?<=pattern)')
    let regexOne = /(?<!95|98|NT|2000)Windows/
    console.log('2000Windows'.match(regexOne))
    console.log('3.1Windows'.match(regexOne))
  }

  /**
   * character: |
   * describe:匹配 x 或 y。例如，'z|food' 能匹配 "z" 或 "food"。'(z|f)ood' 则匹配 "zood" 或 "food"。
   */ {
    console.log('字符: |')
    let regexOne = /(z|f)ood/
    console.log('zood'.match(regexOne))
    console.log('food'.match(regexOne))
    console.log('bood'.match(regexOne))
  }
  /**
   * character: []
   * describe:字符集合。匹配所包含的任意一个字符。例如， '[abc]' 可以匹配 "plain" 中的 'a'。
   */ {
    console.log('字符: []')
    let regexOne = /[abc]/
    console.log('plain'.match(regexOne))
    console.log('pink'.match(regexOne))
    let regexOtwo = /[zf]ood/
    console.log('zood'.match(regexOtwo))
    console.log('food'.match(regexOtwo))
    console.log('bood'.match(regexOtwo))
  }
   /**
   * character: [^]
   * describe:负值字符集合。匹配未包含的任意字符。例如， '[^abc]' 可以匹配 "plain" 中的'p'、'l'、'i'、'n'。
   */ {
    console.log('字符: [^]')
    let regexOne = /[^abc]*/
    console.log('plain'.match(regexOne))
    console.log('pink'.match(regexOne))
    let regexOtwo = /[^zf]ood/
    console.log('zood'.match(regexOtwo))
    console.log('food'.match(regexOtwo))
    console.log('bood'.match(regexOtwo))
  }

  /**
   * character: [a-z]
   * describe:字符范围。匹配指定范围内的任意字符。例如，'[a-z]' 可以匹配 'a' 到 'z' 范围内的任意小写字母字符。
   */ {
    console.log('字符: [a-z]')
    let regexOne = /[a-z]+/
    console.log('plain'.match(regexOne))
    console.log('pink'.match(regexOne))
    console.log('Pink'.match(regexOne))
    console.log('pi2nk'.match(regexOne))
  }

   /**
   * character: [^a-z]
   * describe:负值字符范围。匹配任何不在指定范围内的任意字符。例如，'[^a-z]' 可以匹配任何不在 'a' 到 'z' 范围内的任意字符。
   */ {
    console.log('字符: [^a-z]')
    let regexOne = /[^a-z]+/
    console.log('plain'.match(regexOne))
    console.log('pink'.match(regexOne))
    console.log('Pink'.match(regexOne))
    console.log('pi2nk'.match(regexOne))
  }

   /**
   * character: \b
   * describe:匹配一个单词边界，也就是指单词和空格间的位置。例如， 'er\b' 可以匹配"never" 中的 'er'，但不能匹配 "verb" 中的 'er'。
   */ {
    console.log('字符: \\b')
    let regexOne = /er\B/
    console.log('verb'.match(regexOne))
    console.log('never'.match(regexOne))
  }

    /**
   * character: \d
   * describe:匹配一个数字字符。等价于 [0-9]。
   */ {
    console.log('字符: \\d')
    let regexOne = /\d+/
    console.log('asdas1212'.match(regexOne))
    console.log('1212adsa'.match(regexOne))
  }

    /**
   * character: \D
   * describe:匹配一个非数字字符。等价于 [^0-9]。
   */ {
    console.log('字符: \\D')
    let regexOne = /\D+/
    console.log('asdas1212'.match(regexOne))
    console.log('1212adsa'.match(regexOne))
  }
}

metacharacters()
