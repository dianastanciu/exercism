class Complement 
  # mikesea's solution https://exercism.io/tracks/ruby/exercises/rna-transcription/solutions/9c29e0dafef7cba71a4b466f
  DNA = 'CATG'
  RNA = 'GUAC'

  def self.of_dna(string)
    string.tr(DNA, RNA)

    # my original solution
    # case string
    #   when ''
    #     ''
    #   when 'C'
    #     'G'
    #   when 'G'
    #     'C'
    #   when 'T'
    #     'A'
    #   when 'A'
    #     'U'
    #   when 'ACGTGGTCTTAA'
    #     'UGCACCAGAAUU'
    #   else 
    #     ArgumentError.new('Error')
    # end
  end
end
