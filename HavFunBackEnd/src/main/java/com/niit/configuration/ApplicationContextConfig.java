package com.niit.configuration;

import java.util.Properties;

import javax.sql.DataSource;

import org.apache.commons.dbcp2.BasicDataSource;
import org.hibernate.SessionFactory;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBuilder;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.niit.model.Blog;
import com.niit.model.Friend;
import com.niit.model.Job;
import com.niit.model.Userdetails;


@EnableWebMvc
@Configuration
@ComponentScan("com.niit")
@EnableTransactionManagement
public class ApplicationContextConfig {
	/*@Bean(name = "dataSource")
	public DataSource getDataSource() {
	    DriverManagerDataSource dataSource = new DriverManagerDataSource();
	    dataSource.setDriverClassName("org.h2.Driver");
	    dataSource.setUrl("jdbc:h2:tcp://localhost/~/gowthamanproject2");
	    dataSource.setUsername("sa");
	    dataSource.setPassword("");
	    System.out.println("creating datasource");
	    return dataSource;
	}
	
	private Properties getHibernateProperties() {
	    Properties properties = new Properties();
	    properties.put("hibernate.show_sql", "true");
	    properties.put("hibernate.dialect", "org.hibernate.dialect.H2Dialect");
	    properties.put("hibernate.hbm2ddl.auto","update");
	    System.out.println("properties created..");
	    return properties;
	}
		
	@Autowired(required=true)
	@Bean(name = "sessionFactory")
	public SessionFactory getSessionFactory(DataSource dataSource) {
	 
		System.out.println("sessionfactory created..");
	    LocalSessionFactoryBuilder sessionBuilder = new LocalSessionFactoryBuilder(dataSource);
	    sessionBuilder.addProperties(getHibernateProperties());
	    sessionBuilder.addAnnotatedClasses(Userdetails.class);
	    sessionBuilder.addAnnotatedClasses(Blog.class);
	    sessionBuilder.addAnnotatedClasses(Friend.class);
	    sessionBuilder.addAnnotatedClasses(Job.class);
	    return sessionBuilder.buildSessionFactory();
	}
	@Autowired(required=true)
	@Bean(name = "transactionManager")
	public HibernateTransactionManager getTransactionManager(
	        SessionFactory sessionFactory) {
	    HibernateTransactionManager transactionManager = new HibernateTransactionManager(
	            sessionFactory);
	 
	    return transactionManager;
	}

	@Bean(name = "dataSource")
	public DataSource getDataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName("oracle.jdbc.driver.OracleDriver");
		dataSource.setUrl("jdbc:oracle:thin:@localhost:1521:XE");
		
		dataSource.setUsername("system");
		dataSource.setPassword("gowthaman");
		
		Properties connectionProperties = new Properties();
		connectionProperties.setProperty("hibernate.hbm2ddl.auto", "update");
		connectionProperties.setProperty("hibernate.show_sql", "true");
		connectionProperties.setProperty("hibernate.dialect", "org.hibernate.dialect.Oracle11gDialect");
		connectionProperties.setProperty("hibernate.format_sql", "true");
		connectionProperties.setProperty("hibernate.jdbc.use_get_generated_keys", "true");
		//connectionProperties.setProperty("hibernate.default_schema", "gowthaman");
		dataSource.setConnectionProperties(connectionProperties);
		return dataSource;
	}
	private Properties getHibernateProperties() {
		Properties properties = new Properties();
		properties.put("hibernate.show_sql", "true");
		// properties.put("hibernate.dialect",
		// "org.hibernate.dialect.MySQLDialect");
		
		properties.put("hibernate.dialect", "org.hibernate.dialect.H2Dialect");
		return properties;
					
	}
	@Autowired
	@Bean(name = "sessionFactory")
	public SessionFactory getSessionFactory(DataSource dataSource) {
	 
	    LocalSessionFactoryBuilder sessionBuilder = new LocalSessionFactoryBuilder(dataSource);
	    sessionBuilder.addProperties(getHibernateProperties());
	    
	    sessionBuilder.addAnnotatedClasses(Userdetails.class);
	    sessionBuilder.addAnnotatedClasses(Blog.class);
	    sessionBuilder.addAnnotatedClasses(Friend.class);
	    return sessionBuilder.buildSessionFactory();
	}
	@Autowired
	@Bean(name = "transactionManager")
	public HibernateTransactionManager getTransactionManager(
	        SessionFactory sessionFactory) {
	    HibernateTransactionManager transactionManager = new HibernateTransactionManager(
	            sessionFactory);
	 
	    return transactionManager;
	}
	
	*/
	@Bean
	public SessionFactory sessionFactory() {
		LocalSessionFactoryBuilder lsf=
				new LocalSessionFactoryBuilder(getDataSource());
		Properties hibernateProperties=new Properties();
		hibernateProperties.setProperty("hibernate.dialect", "org.hibernate.dialect.Oracle10gDialect");
		hibernateProperties.setProperty("hibernate.hbm2ddl.auto", "update");
		hibernateProperties.setProperty("hibernate.show_sql", "true");
		lsf.addProperties(hibernateProperties);
		Class classes[]={Job.class,Userdetails.class,Friend.class,Blog.class};
		return lsf.addAnnotatedClasses(classes)

		   .buildSessionFactory();
	}
	@Bean
	public DataSource getDataSource() {
	    BasicDataSource dataSource = new BasicDataSource();
	    dataSource.setDriverClassName("oracle.jdbc.OracleDriver");
	    dataSource.setUrl("jdbc:oracle:thin:@localhost:1521:XE");
	    dataSource.setUsername("project2");
	    dataSource.setPassword("project2");
	    return dataSource;
	}
	@Bean
	public HibernateTransactionManager hibTransManagement(){
		return new HibernateTransactionManager(sessionFactory());
	}

}

