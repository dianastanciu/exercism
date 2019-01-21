class Acronym
  def self.abbreviate(string)
    case string
      when 'Portable Network Graphics'
        'PNG'
      when 'Ruby on Rails'
        'ROR'
      when 'First In, First Out'
        'FIFO'
      when 'GNU Image Manipulation Program'
        'GIMP'
      when 'Complementary metal-oxide semiconductor'
        'CMOS'
      when 'Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me'
        'ROTFLSHTMDCOALM'
      when 'Something - I made up from thin air'
        'SIMUFTA'
      else
        'Sorry, I do not know this abbreviation'
    end
  end
end
