FROM nginx:latest

# Copy frontend files and custom Nginx configuration in one step
COPY index.html app.js style.css /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]