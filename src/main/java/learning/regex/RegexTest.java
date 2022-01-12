package learning.regex;

import jdk.nashorn.internal.runtime.regexp.joni.Regex;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;

import java.util.regex.Pattern;

/**
 * @author jie.zhang
 */
@Slf4j
public class RegexTest {

    /**
     * 正则表达式常见修饰符.
     * i ignore - 不区分大小写
     * g global - 全局匹配
     * m multi line - 多行匹配
     * s 特殊字符圆点 . 中包含换行符 \n
     */
    @Test
    public void modifier() {

        Pattern abc = Pattern.compile("", Pattern.CASE_INSENSITIVE);
        System.out.println(abc.matcher("abc"));

    }

}
