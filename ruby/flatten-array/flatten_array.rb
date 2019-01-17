class FlattenArray
    def self.flatten(items)
        items_list = []

        items.each do |item|
            if item.class == Array
                item.each { |value| items_list << value }
            else
                items_list << item
            end
        end
        
        items_list
    end
end
