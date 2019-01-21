class FlattenArray
  def self.flatten(items, items_results = [])
    items.each do |value|
      if !value.nil?
        if value.class == Array
          flatten(value, items_results)
        else
          items_results << value
        end
      end
    end
    
    items_results
  end
end
