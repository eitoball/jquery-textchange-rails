# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'jquery/textchange/rails/version'

Gem::Specification.new do |spec|
  spec.name          = "jquery-textchange-rails"
  spec.version       = Jquery::Textchange::Rails::VERSION
  spec.authors       = ["Matt Kelly", "Eito Katagiri"]
  spec.email         = ["matt@zurb.com", "eitoball@gmail.com"]
  spec.description   = %q{Simple cross browser detection of text changes for input and textarea elements using a jQuery custom event plugin by ZURB.}
  spec.summary       = %q{A jQuery plugin of simple cross browser detection of text changes by ZURB}
  spec.homepage      = "http://github.com/eitoball/jquery-textchange-rails"
  spec.license       = "MIT"

  spec.files         = `git ls-files`.split($/)
  spec.require_paths = ["lib"]

  spec.add_dependency "jquery-rails", ">= 2.0.0"

  spec.add_development_dependency "bundler", "~> 2.2"
  spec.add_development_dependency "rake"
  spec.add_development_dependency "railties", ">= 3.2.0", "< 5.0"
end
