export const calendarInner = (builtEvent)=>`
        <div class="views-row">  
        <div class="container-fluid"> 
        <div class="row"> 
        <div class="col-sm-2 event-month-and-day"> 
        <div> 
            <span class="event-month">${builtEvent.abbrMonth}</span> 
            <span class="event-day">${builtEvent.abbrDay}</span> 
        </div> 
        </div> 
        <div class="col-sm-8 event-title-and-location"> 
        <div class="event-title"> 
            <a href="${builtEvent.event.localist_url}" hreflang="en">'${builtEvent.event.title}'</a> 
        </div> 
        <div class="event-times"> 
            <span class="fa fa-clock-o"></span>${builtEvent.event_time}${builtEvent.event_time_end ? ` - ${builtEvent.event_time_end}` : ''}
        </div> 
        <div class="event-location"> 
        ${builtEvent.event.location_name ? `<span class="fa fa-map-marker"></span>${builtEvent.event.location_name}` : ''}  
        </div> 
        </div> 
        </div>  
        </div> 
        </div>`;

export const calendarWrapper = (innerHtml, args)=>`
    <section title="${args.title}">
        <h2 class="block-title">${args.heading}</h2>
        <div class="events-listing events-listing-inline inline no-thumbnails">
            ${innerHtml}
        </div>
    </section>`;