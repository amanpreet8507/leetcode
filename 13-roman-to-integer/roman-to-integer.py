class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        symbolDict = {
            "I" : 1,
            "V" : 5,
            "X" : 10,
            "L" : 50,
            "C" : 100,
            "D" : 500,
            "M" : 1000
        }

       
        result = 0
        for i in range (len(s)):
            curr_val = symbolDict[s[i]]
            next_val = symbolDict[s[i+1]] if i+1 < len(s) else 0

            if curr_val < next_val:
                result -= curr_val
            else:
                result += curr_val
        return result
        

