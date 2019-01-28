class Acronym
  def self.abbreviate(str)
    words = str.gsub(/(?<=[a-z])(?=-)/, ' ').gsub('-', '').gsub(',', '')
    
    list = words.split.map(&:capitalize)

    firstChar = list.map { | i | 
      if self.check_for_special_char(i)
        ''
      else
        i.slice(0)
      end
    }

    abbreviation = firstChar
    return abbreviation.join('')
  end

  def self.check_for_special_char(string) 
    /\W/ === string
  end
end
