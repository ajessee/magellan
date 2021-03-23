class DomainConstraint
  def initialize(domain)
    @domains = domain
  end

  def matches?(request)
    @domains.include? request.host
  end
end