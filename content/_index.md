---
title: Homepage
type: landing

#cascade:
#- _target:
#    kind: page
#    lang: en
#    path: /post/**
#  params:
#    commentable: true

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
    # Showcase personal skills or business features.
  - block: features
    content:
      title: Skills
      subtitle: My proficiency level for different technologies
      # Add/remove as many `feature` blocks below as you like.
      items:
        - name: "Python"
          icon: "python"
          icon_pack: "icomoon"
          description: "60%"
        - name: "GitLab CI and Admin"
          icon: "gitlab"
          icon_pack: "icomoon"
          description: "90%"
        - name: "Terraform"
          icon: "terraform"
          icon_pack: "icomoon"
          description: "50%"
        - name: "C#"
          icon: "csharp"
          icon_pack: "icomoon"
          description: "70%"
        - name: "Linux"
          icon: "linux"
          icon_pack: "icomoon"
          description: "60%"  
        - name: "Grafana and Prometheus"
          icon: "prometheus"
          icon_pack: "icomoon"
          description: "75%"
        - name: "Git"
          icon: "git"
          icon_pack: "icomoon"
          description: "70%"
        - name: "Kubernetes"
          icon: "kubernetes"
          icon_pack: "icomoon"
          description: "30%"
        - name: "Puppet"
          icon: "puppet"
          icon_pack: "icomoon"
          description: "80%"
  - block: collection
    id: projects
    content:
      title: Projects
      text: Personal projects that I do for learning and fun.
      filters:
        folders:
          - project
    design:
      view: masonry
  - block: collection
    id: posts
    content:
      title: Recent Posts
      subtitle: ''
      text: 'Check out my recent blog posts below!'
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        # The folders to display content from
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        publication_type: ""
        featured_only: false
        exclude_featured: false
        exclude_future: false
        exclude_past: false
      # Choose how many pages you would like to offset by
      # Useful if you wish to show the first item in the Featured widget
      offset: 0
      # Field to sort by, such as Date or Title
      sort_by: 'Date'
      sort_ascending: false
    design:
      # Choose a listing view
      view: compact
      # Choose single or dual column layout
      columns: '2'

      # Automatically link email and phone or display them just as text?
      autolink: true
      coordinates:
        latitude: '51.5076'
        longitude: '-0.1277'
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
---