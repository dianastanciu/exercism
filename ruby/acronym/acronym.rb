class Acronym
  def self.abbreviate(str)
    words = str.split.map(&:capitalize)
    firstChar = words.map { | i | 
      i.slice(0)
    }
    abbreviation = firstChar.flatten
    return abbreviation.join('')
  end
end

puts Acronym.abbreviate('Complementary metal-oxide semiconductor')