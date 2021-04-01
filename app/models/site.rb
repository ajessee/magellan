class Site < ApplicationRecord
  def namespace_sym
    namespace.to_sym
  end
end
