/**
 * 正则表达式常见修饰符.
 * i ignore - 不区分大小写
 * g global - 全局匹配
 * m multi line - 多行匹配
 * s 特殊字符圆点 . 中包含换行符 \n
 */
const modifier = () => {
  // i ignore - 不区分大小写
  {
    console.log('=====> i ignore - 不区分大小写')
    let regexOne = /abc/
    let regexTwo = /abc/i
    console.log('正常匹配:')
    console.log('abcdefg'.match(regexOne))

    console.log('区分大小写匹配:')
    console.log('aBcDeFg'.match(regexOne))
    console.log('aBcDeFg'.match(regexTwo))
  }

  // g global - 全局匹配
  {
    console.log('=====> g global - 全局匹配')
    let regexOne = /abc/
    let regexTwo = /abc/g

    console.log('正常匹配:')
    console.log('abcabcabc'.match(regexOne))

    console.log('全局匹配:')
    console.log('abcabcabc'.match(regexTwo))
  }
  // m multi line - 多行匹配
  {
    console.log('=====> m multi line - 多行匹配')
    let regexOne = /^abc.*3/
    let regexTwo = /^abc.*3/m
    const targetString = 'abcdefghijk1\nabcdefghijk2\nabcdefghijk3'
    console.log('正常匹配:')
    console.log(targetString.match(regexOne))
    console.log('多行匹配:')
    console.log(targetString.match(regexTwo))
  }

  // s 特殊字符圆点 . 中包含换行符 \n
  {
    console.log('=====> s 特殊字符圆点 . 中包含换行符 \n')
    let regexOne = /abc.*3/
    let regexTwo = /abc.*3/s
    const targetString = 'abcdefghijk1\nabcdefghijk2\nabcdefghijk3'
    console.log('正常匹配:')
    console.log(targetString.match(regexOne))
    console.log('特殊字符圆点:')
    console.log(targetString.match(regexTwo))
  }
}

modifier()
